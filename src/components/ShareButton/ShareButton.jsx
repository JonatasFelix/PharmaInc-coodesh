import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import SharePost from "../../services/SharePost";
import { Box } from './styles';

const ShareButton = ({title, body, link}) => {

    return (
        <Box>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ShareIcon />}
                onClick={() => SharePost(title, body, link)}
            >
                Share Profile
            </Button>
        </Box>

    )

}

export default ShareButton;