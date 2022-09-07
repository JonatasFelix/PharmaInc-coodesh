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

export const ProfileEmail = styled.h2`
    text-align: center;
    font-size: 0.9rem;
    font-weight: 100;
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