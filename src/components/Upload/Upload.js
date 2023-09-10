import React, {useState} from 'react'
const Upload = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const token = storedUser.token;
    const [profileImageFile, setProfileImageFile] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImageFile(file);

    const imageUrl = URL.createObjectURL(file);
    setProfileImageUrl(imageUrl);
  };

  const handleImageUpload = () => {
    if (!profileImageFile) {
      console.error('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('profileImage', profileImageFile);

    const url = 'https://academics.newtonschool.co/api/v1/user/updateProfileImage';
    const headers = {
        Authorization: `Bearer ${token}`,
        projectId: 'sjp136jp4txm',
    };
    const request = new Request(url, {
      method: 'PATCH',
      body: formData,
      headers: headers,
    });
    fetch(request)
      .then(response => {
        if (response.ok) {
          console.log('Profile image updated successfully.');
        } else {
          console.error('Failed to update profile image.');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
      setProfileImageUrl(null);
  };
  return (
    <div><h1>Update Profile Image</h1>
    {profileImageUrl && <img src={profileImageUrl} alt="Profile Preview" style={{ maxWidth: '100px' }} />}
    <input type="file" accept="image/*" onChange={handleImageChange} />
    <button onClick={handleImageUpload}>Upload Image</button></div>
  )
}

export default Upload;