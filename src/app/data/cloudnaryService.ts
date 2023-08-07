          
const cloudinaryConfig = { 
  cloud_name: 'daixghk2m', 
  api_key: '412662348137339', 
  api_secret: 'wPGQrMm3UsEoKlegyZLtFOJZy9w' 
};

export async function uploadImageCloudnary(file){
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset','jsevqznk')
    formData.append('api_key','412662348137339')
    const res = await fetch('https://api.cloudinary.com/v1_1/daixghk2m/image/upload', {method: 'POST', body: formData})
    const data = await res.json()
    return data.secure_url
}