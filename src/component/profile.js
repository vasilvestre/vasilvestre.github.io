import React from 'react'

const Profile = () => (
    <div className="flex justify-center items-center">
        <div className="flex-shrink-0 content-center">
            <img
                className="mt-8 mx-auto h-32 w-32 rounded-full border-black-600 border-2"
                alt="profile picture"
                src="../../assets/pic.jfif"
                width="100px"
                height="100px"
            />
            <div className="flex mt-6">
                <h4 className="text-center text-white font-bold text-sm">
                    Valentin Silvestre
                </h4>
            </div>
        </div>
    </div>
)

export default Profile
