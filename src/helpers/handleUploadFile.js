import { validationErrMsg, validFileExtension } from "constants/constants";
import { toast } from "react-toastify";

export const handleUploadFile = (file, setAvatar, setAvatarData) => {
  const fileNameSplit = file.name.split('.');
    const isValidFileExtension = validFileExtension.includes(
      fileNameSplit[fileNameSplit.length - 1]
    );

    if (file.size > 1000000) {
      toast.error(validationErrMsg.avatarIsTooLarge);
      setAvatar();
      setAvatarData();
      return;
    }

    if (!isValidFileExtension) {
      toast.error(validationErrMsg.avatarExtensionFailure);
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