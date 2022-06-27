import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AppHeader = styled.div`
    background-color: #403D3D;
    width: 100vw;
    position: fixed;
`

const NavContainer = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 16px 8px;
`;

const LogContainer = styled.div`
    display: flex;
`;

const LogBox = styled.div`
    font-size: 36px;
    color: ${(props) => props.color || "black"};
`;

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    &:hover {
        cursor: pointer;
    }
`;

const Img = styled.img`
    background-color: white;
    width: 50px;
`;

const SearchForm = styled.form`
    display: flex;
    align-items: center;
    flex-grow: 1;
    gap: 8px;

    input {
        height: 30px;
        width: 100%;
        margin: 0 16px;
        padding: 2px 4px;
    }
`;

const MenuBox = styled.div`
    display: flex;
    gap: 8px;
`

const HeaderComponent = () => {
    const navigate = useNavigate();

    return (
        <AppHeader>
            <NavContainer>
                <Link to="/">
                    <LogContainer>
                        <LogBox color="#724ef5">S</LogBox>
                        <LogBox color="#4ea4f5">S</LogBox>
                        <LogBox color="#018dff">C</LogBox>
                        <LogBox color="#ae00ff">.</LogBox>
                        <LogBox color="#1dfaef">Lab</LogBox>
                    </LogContainer>
                </Link>

                <MenuBox>
                
                </MenuBox>
            </NavContainer>
        </AppHeader>
    )
}

export default HeaderComponent;