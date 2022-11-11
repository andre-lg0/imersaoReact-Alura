/* eslint-disable @next/next/no-img-element */
import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";
import React from "react";

function HomePage() {
    // const estilosDaHomePage =  {backgroundColor: "red"}
    const [filterValue, setFilterValue] = React.useState("");
    return (
        <>
            <CSSReset></CSSReset>
            <div /* style={estilosDaHomePage}  */>
                <Menu filterValue={filterValue} setFilterValue={setFilterValue} />
                <Header />AluraTube
                <TimeLine searchValue={filterValue} playlists={config.playlists} />
            </div>
        </>
    );

}

export default HomePage

const StyledHeader = styled.div`
    background-color: ${({theme})=> theme.backgroundLevel1};
    img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px, 32px;
        gap: 16px;

    }

`;
const SlyledBanner = styled.div`

    background-color: gray;
    background-image: url( ${({ bg }) => bg});
    backgroun-size: contain;
    height: 250px;

`;

function Header() {
    return (
        <StyledHeader>
            <SlyledBanner bg={config.bg} />
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}

                    </h2>
                    <p>
                        {config.job}

                    </p>
                </div>

            </section>

        </StyledHeader>
    );
}

// function Menu() {
//     return ( <div> Menu
//         </div>
//     );
// }


function TimeLine({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    console.log(playlistNames)
    return (

        <StyledTimeline>
            {
                playlistNames.map((playlisName) => {

                    const videos = props.playlists[playlisName];
                    console.log(videos);
                    return (
                        <section key={playlisName}>
                            <h2>{playlisName} </h2>
                            <div>
                                {videos.filter((video) => {
                                    const normalizedTitle = video.title.toLowerCase();
                                    const normalizedSearch = searchValue.toLowerCase();
                                    return normalizedTitle.includes(normalizedSearch)
                                })
                                    .map((video) => {
                                        return (
                                            <a key={video.url} href={video.url}>
                                                <img src={video.thumb} />
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })}
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}
