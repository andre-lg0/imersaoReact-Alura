import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset";
import { StyledTimeline } from "../src/components/Timeline";
import Menu from "../src/components/Menu";

function HomePage() {
    // const estilosDaHomePage =  {backgroundColor: "red"}
    console.log(config.playlists)
    return (
        <>
            <CSSReset></CSSReset>
            <div /* style={estilosDaHomePage}  */>
                <Menu />
                <Header></Header>
                <TimeLine playlists={config.playlists} />
            </div>
        </>
    );

}

export default HomePage

const StyledHeader = styled.div`
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

function Header() {
    return (
        <StyledHeader>
            <img /* src="banner" */ />
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
//     return (
//         <div>
//             Menu
//         </div>
//     );
// }


function TimeLine(props) {
    const playlistNames = Object.keys(props.playlists)

    console.log(playlistNames)
    return (

        <StyledTimeline>
            {
                playlistNames.map((playlisName) => {

                    const videos = props.playlists[playlisName];
                    console.log(videos);
                    return (
                        <section>
                            <h2>{playlisName} </h2>
                            <div>
                                {videos.map((video) => {
                                    return (
                                        <a href={video.url}>
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
