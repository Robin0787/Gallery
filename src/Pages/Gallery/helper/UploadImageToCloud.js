const UploadImageToCloud = async (formData) => {
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;
  const res = await fetch(url, { method: "POST", body: formData });
  const data = await res.json();
  return data.data;
};

export default UploadImageToCloud;
