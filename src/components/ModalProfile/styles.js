import styled from 'styled-components';

export const Box = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 65px 10px 20px ;
    padding-top: 85px;

    background-color: #fff;
    border-radius: 24px;
    box-shadow:  8px -8px 16px #3d3d3d,
                -8px 8px 16px #474747;

`

export const CloseButton = styled.div`
    position: absolute;
    right: 25px;
    top: 5px;
`

export const ProfileImage = styled.img`
    position: absolute;
    top: -61px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 50%;
    box-shadow: 0px 30px 30px -20px rgba(66, 68, 90, 1);
    border: 5px solid #1976D2;
`

export const ProfileName = styled.h1`
    text-align: center;
`

export const ProfileAge = styled.span`
    font-weight: 100;
`

export const ProfileId = styled.h2`
    text-align: center;
    font-size: 0.9rem;
    font-weight: 100;
    margin-top: 4px;
`
export const ProfileInfo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    margin-top: 8px;
`

export const BoxIconLocation = styled.span`
    position: absolute;
    left: -23px;
    bottom: -6px;
`

export const ProfileLocation = styled.h2`
    text-align: center;
    font-size: 0.9rem;
    font-weight: 100;
    position: relative;
`

export const Separator = styled.hr`
    width: 100%;
    margin: 20px 0;
    border: 1px solid #ccc;
    border-radius: 50%;
`
export const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
`

export const BoxInfoData = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    max-width: 320px;
`

export const InfoText = styled.span`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
`