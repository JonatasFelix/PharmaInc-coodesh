import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import * as s from "./styles";
import moment from "moment/moment";
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

const ModalProfile = ({ profile, openModal, setOpenModal }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenModal(false);
    navigate("/")
  };

  console.log(profile.length);


  const Profile = () => {
    return (
      <>
        <s.ProfileImage src={profile[0].picture.large} alt={profile[0].name.first} />
        <s.ProfileName>{profile[0].name.first} {profile[0].name.last}</s.ProfileName>
        <s.ProfileEmail>{profile[0].email}</s.ProfileEmail>

        <s.ProfileInfo>
        <s.ProfileLocation>
        <s.BoxIconLocation><LocationOnSharpIcon  sx={{color: "#1976D2"}}/></s.BoxIconLocation>
            {profile[0].location.city}, {profile[0].location.country}
        </s.ProfileLocation>
        </s.ProfileInfo>


        <div>{profile[0].gender}</div>
        <div>{moment(profile[0].dob.date).format("DD/MM/YYYY")}</div>
        <div>{profile[0].phone}</div>
        <div>{profile[0].cell}</div>
        <div>{profile[0].location.country}</div>
        <div>{profile[0].login.uuid}</div>

      </>
    );
  };

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <s.Box>
        {profile.length ? <Profile /> : <div>User Not Found</div>}
      </s.Box>
    </Modal>
  );
};

export default ModalProfile;
