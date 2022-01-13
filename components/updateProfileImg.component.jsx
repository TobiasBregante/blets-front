import axios from "axios"

const HandlerUpdateProfileImg = async (img, userId) => {
    let frmData = new FormData();
    frmData.append('profile_img', img);

    const
    verifyExistImg = img || false,
    data = frmData,
    headers = {
        headers: {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
        }
    },
    updateImgProfile = await (await axios.put(`${process.env.API_PATH}/v1/user/profile-photo/${userId}`, data, headers)).data

    return updateImgProfile
}

export default HandlerUpdateProfileImg