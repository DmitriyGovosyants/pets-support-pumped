import { toast } from "react-toastify";

const validFileExtension = ['png', 'jpeg', 'jpg', 'webp'];

export const handleUploadFile = (file, setAvatar, setAvatarData) => {
  const fileNameSplit = file.name.split('.');
    const isValidFileExtension = validFileExtension.includes(
      fileNameSplit[fileNameSplit.length - 1]
    );

    if (file.size > 1000000) {
      toast.error('File is too large');
      setAvatar();
      setAvatarData();
      return;
    }

    if (!isValidFileExtension) {
      toast.error('File must contain only .png, .jpeg, .jpg or .webp extension');
      setAvatar();
      setAvatarData();
      return;
    }

    setAvatarData(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const base64data = reader.result;
      setAvatar(base64data);
    };
}