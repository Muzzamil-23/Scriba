import React, { useEffect, useState } from 'react'
import Container from './Container'
import Button from './Button'
import { UploadIcon, X } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { profileSchema } from '@/validations/profileSchema'
import storageService from '@/supabase/storage'
import { useSelector } from 'react-redux'
import userService from '@/supabase/userService'
import { useNavigate } from 'react-router'
import { supabase } from '@/supabase/config'


const CompleteProfile = () => {
  // const interests = ['#Technology', '#Design', '#Science', '#Writing', '#Business', '#Programming', '#AI', '#ML', '#Startups']
  // const [active, setActive] = useState([])
  const [avatar, setAvatar] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const userId = useSelector(state => state.auth.userId)
  const navigate = useNavigate()


  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(profileSchema)
  })

  const avatarFiles = watch("avatar")

  // useEffect(() => {
  //   register("interest")
  // }, [register])

  // useEffect(() => {
  //   setValue("interest", active)
  // }, [setValue, active])

  // Sync avatar preview with form data
  useEffect(() => {
    if (avatarFiles && avatarFiles.length > 0) {
      const file = avatarFiles[0]
      // console.log("file", file);

      const imageUrl = URL.createObjectURL(file)
      // console.log("imageUrl", imageUrl);

      setAvatar(imageUrl)
      // Cleanup URL on unmount or when avatar changes
      return () => URL.revokeObjectURL(imageUrl)
    }
  }, [avatarFiles])



  const profileCompletionHandler = async (data) => {
    setLoading(true)
    try {
      if (data.avatar?.[0] && userId) {
        // console.log("data.avatar[0]",data.avatar[0]);
        // console.log("data.avatar[0].name", data.avatar[0].name);
        const uploadAvatar = await storageService.uploadAvatar(userId, data.avatar[0])
        console.log("neche");

        console.log("Error at uploadAvatar", uploadAvatar);

        if (uploadAvatar) {
          const response = await userService.completeProfile(data, userId, uploadAvatar)
          if (response) navigate("/")
        }
      }
    }
    catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }






  // const handleInterestBtn = (interest, e) => {
  //   e.preventDefault()
  //   setActive((prev) => (
  //     prev.includes(interest) ? prev.filter(item => item !== interest) : [...prev, interest]
  //   ))
  // }
  // console.log("Avatar file", data.avatar?.[0]);





  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }
  const handleAvatarRemove = (e) => {
    e.preventDefault()
    setAvatar(null)
    // Reset the file input
    const fileInput = document.getElementById('avatarUpload')
    if (fileInput) {
      fileInput.value = ''
    }
    setValue("avatar", null) // Reset form field
  }
  return (
    <Container className='mb-16'>
      <div className='flex flex-col mt-20'>
        <div>
          <h2 className='text-2xl md:text-3xl font-extrabold'>Complete your profile</h2>
          <p className='mt-2 text-muted-foreground text-base md:text-lg'>Set up how you appear across the website</p>
        </div>
        <div className='glass-effect rounded-xl px-6 md:px-8 py-6 mt-8'>
          <form onSubmit={handleSubmit(profileCompletionHandler)}>
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-semibold'>Profile details</h4>
              <p className='text-muted-foreground'>Basic info, settings, and interests</p>
            </div>
            <div className='mt-8'>
              <h5 className='text-base md:text-lg font-semibold'>Avatar</h5>
              <div className='mt-3 flex flex-wrap gap-8  items-center'>
                <div
                  className={`rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center overflow-hidden ${avatar ? '' : 'bg-muted'}`}
                >
                  {avatar && (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-16 h-16 md:w-full md:h-full object-cover"
                    />
                  )}

                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex flex-wrap justify-center md:justify-start gap-4'>
                    <label
                      htmlFor="avatarUpload"
                      className='bg-secondary px-4 py-2 text-sm md:text-base rounded-lg hover:bg-secondary/70 hover:cursor-pointer flex items-center gap-2'
                    >
                      Upload <UploadIcon size={18} />
                    </label>
                    {
                      avatar && <button className='bg-secondary text-sm md:text-base px-4 py-2 rounded-lg hover:bg-secondary/70 hover:cursor-pointer flex items-center gap-2' onClick={handleAvatarRemove}>Remove <X size={18} /></button>
                    }
                  </div>
                  <input type='file' accept='image/png,image/jpeg,image/webp,image/jpg' id='avatarUpload' className='hidden' onChange={handleAvatarChange} {...register("avatar")} />
                  <span className='text-center md:text-left text-sm text-muted-foreground pl-2'>PNG, JPG, JPEG and WEBP only</span>
                  {
                    errors.avatar && <p className='text-red-500'>{errors.avatar.message}</p>
                  }
                </div>
              </div>
              <div className='flex flex-col gap-4 border-t mt-8'>
                <div className='mt-8 flex flex-col gap-3'>
                  <label htmlFor="username" className='text-base md:text-lg font-semibold'>Display Name</label>
                  <input type="text" id='username' className='border border-border px-4 py-2 rounded-lg' placeholder='e.g. John Doe' {...register("displayName")} />
                  {
                    errors.displayName && <p className='text-red-500'>{errors.displayName.message}</p>
                  }
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                  <label htmlFor="username" className='text-base md:text-lg font-semibold'>Designation</label>
                  <input type="text" id='username' className='border border-border px-4 py-2 rounded-lg' placeholder='e.g. Senior Software Engineer at ABC Company' {...register("designation")} />
                  {
                    errors.designation && <p className='text-red-500'>{errors.designation.message}</p>
                  }
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                  <label htmlFor="bio" className='text-base md:text-lg font-semibold'>Short bio</label>
                  <textarea placeholder='Tell readers about yourself in a sentence or two..' id="bio" className='border border-border px-4 py-2 rounded-lg' {...register("bio")}></textarea>
                  {
                    errors.bio && <p className='text-red-500'>{errors.bio.message}</p>
                  }
                </div>
                <div className='flex flex-col mt-4 gap-3'>
                  <label htmlFor="location" className='text-base md:text-lg font-semibold'>Location</label>
                  <input type="text" id='location' placeholder='City, Country' className='border border-border rounded-lg px-4 py-2' {...register("location")} />
                  {
                    errors.location && <p className='text-red-500'>{errors.location.message}</p>
                  }
                </div>
                {/* <div className='mt-4'>
                  <label className='text-base md:text-lg font-semibold'>Interests</label>
                  <p className=' text-sm md:text-lg text-muted-foreground mt-2'>Choose a topic you write or read about frequently</p>
                  <div className='mt-4 flex gap-4 flex-wrap'>
                    {
                      interests.map((interest) => (
                        <button type='button' key={interest} className={`text-sm md:text-base border px-4 rounded-xl hover:border-blue-500 hover:cursor-pointer ${active.includes(interest) ? 'border-blue-500' : 'border-border '}`} onClick={(e) => handleInterestBtn(interest, e)}>
                          {interest}
                        </button>
                      ))
                    }
                    {
                      errors.interest && <p className='text-red-500'>{errors.interest.message}</p>
                    }
                  </div>
                </div> */}
                <div className='mt-8'>
                  <Button className='px-4
                   py-2 rounded-lg'>Complete profile</Button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </Container>
  )
}

export default CompleteProfile