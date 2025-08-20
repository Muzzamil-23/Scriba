import { Container } from 'postcss'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

const CreatePost = ({post}) => {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.slug || '',
            content: post?.content || '',
            status: post?.status || 'active',
        }
    })
    const navigate = useNavigate()

    const submitPost = () => {}

  return (
    <div>
        <Container>
            <div className='flex gap-8'>
                <div>
                    <form onSubmit={handleSubmit(submitPost)}>
                        <div>
                            <h4>Cover Image</h4>
                            <label htmlFor="coverImage"></label>
                            <input className='hidden' type="file" name="" id="coverImage" />
                        </div>

                    </form>
                </div>
                <div></div>
            </div>
        </Container>
    </div>
  )
}

export default CreatePost