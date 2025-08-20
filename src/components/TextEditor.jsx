import React from 'react'
import { Controller } from 'react-hook-form'
import { Editor } from "@tinymce/tinymce-react"

const TextEditor = ({name, control, label, defaultValue = ""}) => {
  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller
            name={name || "content"}
            control={control}
            render={({field: {onChange, value}}) => (
                <Editor
                    initialValue={defaultValue}
                    value={value}
                    init={{
                        // initialValue: defaultValue,
                        menubar: true,
                        plugins: [
                            "code codesample link lists"
                        ],
                        toolbar: "undo redo | bold italic | bullist numlist | codesample code",
                        toolbar_sticky: true,
                        toolbar_mode: 'sliding',
                        height: 500
                    }}
                    onEditorChange={onChange}
                />
            )}
        />

    </div>
  )
}

export default TextEditor