import React from 'react';
import styled from 'styled-components';
import { 
Card, 
CardMedia, 
CardContent, 
Typography, 
Link as MuiLink
} from '@mui/material';
import { Launch as LaunchIcon } from '@mui/icons-material';
import defaultImage from '../../assets/images/popspotlogo.png';
import { usePopupFilter } from '../../hooks/usePopupFilter';

const StyledCard = styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 3px solid; 
    border-radius: 8px;

${({ status }) => {
    switch(status) {
    case 'upcoming':
        return `
        border-color: #FFE66D;
        `;
    case 'ongoing':
        return `
        border-color: #4ecdc4;
        `;
    case 'ended':
        return `
        border-color: #FF6b6b;
        opacity: 0.8;
        background: #707070;

        .MuiTypography-root {
            color: #666666 !important;
        }
        
        .MuiCardMedia-root {
            filter: brightness(0.2);
        }
        `;
    default:
        return `
        border-color: #ddd;
        `;
    }
}}
`;

const ImageContainer = styled.div`
position: relative;
width: 100%;
height: 200px;
`;

const StatusOverlay = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: rgba(240, 240, 240, 0.8);
padding: 10px 20px;
border-radius: 4px;
font-size: 18px;
font-weight: bold;
color: #666;
z-index: 1;
`;

const StyledCardMedia = styled(CardMedia)`
height: 100%;
${({ status }) => status === 'ended' && `
    filter: grayscale(100%) brightness(0.8);
`}
`;

const LinkContainer = styled.div`
display: flex;
align-items: center;
margin-top: auto;
`;

const formatDate = (dateString) => {
const date = new Date(dateString);
return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
};

const PopupCard = ({ popup, onClick }) => {
const { getPopupStatus } = usePopupFilter();
const status = getPopupStatus(popup.startDate, popup.endDate);
const { 
    title, 
    address, 
    startDate, 
    endDate, 
    imageUrl,
    publicUrl 
} = popup;

return (
    <StyledCard status={status} onClick={onClick}>
    <ImageContainer>
        <StyledCardMedia
        component="img"
        image={imageUrl}
        alt={title}
        status={status}
        onError={(e) => {
            e.target.src = defaultImage;
        }}
        />
        {status === 'ended' && (
        <StatusOverlay>종료된 팝업</StatusOverlay>
        )}
    </ImageContainer>
    <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
        {address}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
        {formatDate(startDate)} ~ {formatDate(endDate)}
        </Typography>
        {publicUrl && (
        <LinkContainer>
            <MuiLink
            href={publicUrl}
            target="_blank"
            rel="noopener noreferrer"
            color="#FF8C94"
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
            >
            <Typography variant="body2">공식홈 방문하기</Typography>
            <LaunchIcon fontSize="small" />
            </MuiLink>
        </LinkContainer>
        )}
    </CardContent>
    </StyledCard>
);
};

export default PopupCard;