
import React, { useState } from 'react'
import Container from './Container'
import Button from './Button'
import { UploadIcon, X } from 'lucide-react'

const CompleteProfile = () => {
  const interests = ['#Technology', '#Design', '#Science', '#Writing', '#Business', '#Programming', '#AI', '#ML', '#Startups']
  const [active, setActive] = useState([])
  const [avatar, setAvatar] = useState(null)
  const handleInterestBtn = (interest) => {
    setActive((prev) => (
      prev.includes(interest) ? prev.filter(item => item !== interest) : [...prev, interest]
    ))
  }

  const handleAvatarChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setAvatar(imageUrl)
    }
  }
  const handleAvatarRemove = () => {
    setAvatar(null)
  }
  return (

    <Container>
      <div className='flex flex-col mt-20'>
        <div>
          <h2 className='text-3xl font-extrabold'>Complete your profile</h2>
          <p className='mt-2 text-muted-foreground text-lg'>Set up how you appear across the website</p>
        </div>
        <div className='glass-effect rounded-xl px-8 py-6 mt-8'>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className='flex flex-col gap-1'>
              <h4 className='text-lg font-semibold'>Profile details</h4>
              <p className='text-muted-foreground'>Basic info, settings, and interests</p>
            </div>
            <div className='mt-8'>
              <h5 className='text-lg font-semibold'>Avatar</h5>
              <div className='mt-3 flex gap-8 items-center'>
                <div
                  className={`rounded-full w-20 h-20 flex items-center justify-center overflow-hidden ${avatar ? '' : 'bg-muted'}`}
                >
                  {avatar && (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-4'>
                    <label
                      htmlFor="avatarUpload"
                      className='bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/70 hover:cursor-pointer flex items-center gap-2'
                    >
                      Upload <UploadIcon size={18} />
                    </label>
                    {
                      avatar && <button className='bg-secondary px-4 py-2 rounded-lg hover:bg-secondary/70 hover:cursor-pointer flex items-center gap-2' onClick={handleAvatarRemove}>Remove <X size={18}/></button>
                    }
                  </div>
                  <input type='file' accept='image/png,image/jpeg' id='avatarUpload' className='hidden' onChange={handleAvatarChange} name="Upload" />
                  <span className='text-sm text-muted-foreground pl-2'>PNG or JPEG only</span>
                </div>

              </div>

              <div className='flex flex-col gap-4 border-t mt-8'>
                <div className='mt-8 flex flex-col gap-3'>
                  <label htmlFor="username" className='text-lg font-semibold'>Display Name</label>
                  <input type="text" id='username' className='border border-border px-4 py-2 rounded-lg' placeholder='e.g. John Doe' />
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                  <label htmlFor="username" className='text-lg font-semibold'>Designation</label>
                  <input type="text" id='username' className='border border-border px-4 py-2 rounded-lg' placeholder='e.g. Senior Software Engineer at ABC Company' />
                </div>
                <div className='mt-4 flex flex-col gap-3'>
                  <label htmlFor="bio" className='text-lg font-semibold'>Short bio</label>
                  <textarea placeholder='Tell readers about yourself in a sentence or two..' id="bio" className='border border-border px-4 py-2 rounded-lg'></textarea>
                </div>
                <div className='flex flex-col mt-4 gap-3'>
                  <label htmlFor="location" className='text-lg font-semibold'>Location</label>
                  <input type="text" id='location' placeholder='City, Country' className='border border-border rounded-lg px-4 py-2' />
                </div>
                <div className='mt-4'>
                  <label className='text-lg font-semibold'>Interests</label>
                  <p className='text-lg text-muted-foreground mt-2'>Choose a topic you write or read about frequently</p>
                  <div className='mt-4 flex gap-4 flex-wrap'>
                    {
                      interests.map((interest) => (
                        <button key={interest} className={`border px-4 rounded-xl hover:border-blue-500 hover:cursor-pointer ${active.includes(interest) ? 'border-blue-500' : 'border-border '}`} onClick={() => handleInterestBtn(interest)}>
                          {interest}
                        </button>
                      ))
                    }
                  </div>
                </div>
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