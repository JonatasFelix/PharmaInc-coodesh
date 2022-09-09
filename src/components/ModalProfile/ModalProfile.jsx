import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import moment from "moment/moment";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import PhoneIcon from "@mui/icons-material/Phone";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CakeIcon from '@mui/icons-material/Cake';
import HomeIcon from '@mui/icons-material/Home';
import ShareButton from "../ShareButton/ShareButton";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const ModalProfile = ({ profile, openModal, setOpenModal }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
    navigate("/");
  };

  const genderIcon = (gender) => {
    switch (gender) {
      case "male":
        return <MaleIcon sx={{ color: "#1976D2" }} />;
      case "female":
        return <FemaleIcon sx={{ color: "#EB44DB" }} />;
      default:
        return <RadioButtonUncheckedIcon sx={{ color: "#000000" }} />;
    }
  };

  const Profile = () => {
    return (
      <>

      <s.CloseButton>

      <IconButton onClick={handleClose} aria-label="delete">
        <CloseIcon />
      </IconButton>

      </s.CloseButton>


        <s.ProfileImage
          src={profile[0].picture.large}
          alt={profile[0].name.first}
        />

        <s.ProfileName>
          {profile[0].name.first} {profile[0].name.last},
          <s.ProfileAge> {profile[0].dob.age}</s.ProfileAge>
        </s.ProfileName>

        <s.ProfileId>{profile[0].login.uuid}</s.ProfileId>

        <s.ProfileInfo>
          <s.ProfileLocation>
            <s.BoxIconLocation>
              <LocationOnSharpIcon sx={{ color: "#1976D2" }} />
            </s.BoxIconLocation>
            {profile[0].location.city}, {profile[0].location.country}
          </s.ProfileLocation>
        </s.ProfileInfo>

        <s.Separator />

        <s.BoxInfo>
          <h2>Contacts</h2>
          <s.BoxInfoData>
            <s.InfoText>
              <PhoneIcon sx={{ color: "#1976D2" }} />
              {profile[0].phone}
            </s.InfoText>
            <s.InfoText>
              <PhoneAndroidIcon sx={{ color: "#1976D2" }} />
              {profile[0].cell}
            </s.InfoText>
            <s.InfoText>
              <EmailSharpIcon sx={{ color: "#1976D2" }} /> {profile[0].email}
            </s.InfoText>
          </s.BoxInfoData>
        </s.BoxInfo>

        <s.Separator />

        <s.BoxInfo>
          <h2>Personal information</h2>

          <s.BoxInfoData>
            <s.InfoText>{genderIcon(profile[0].gender)} {profile[0].gender}</s.InfoText>
            <s.InfoText><CakeIcon sx={{ color: "#1976D2" }} /> {moment(profile[0].dob.date).format("DD/MM/YYYY")}</s.InfoText>
            <s.InfoText><HomeIcon sx={{ color: "#1976D2" }} /> {profile[0].location.street.name}, {profile[0].location.street.number}, {profile[0].location.city}</s.InfoText>
          </s.BoxInfoData>
        </s.BoxInfo>

       <ShareButton title={profile[0].name.first} body={profile[0].name.last} link={`?id=${profile[0].login.uuid}`} />

      </>
    );
  };


  const UserNotFound = () => {
    return (
      <s.NotFound>
        <s.CloseButton>

          <IconButton onClick={handleClose} aria-label="delete">
            <CloseIcon />
          </IconButton>

        </s.CloseButton>

        <h1>User not found</h1>
      </s.NotFound>
    );
  }

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <s.Box>{profile.length ? <Profile /> : <UserNotFound/>}</s.Box>
    </Modal>
  );
};

export default ModalProfile;
