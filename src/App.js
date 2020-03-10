import React, { useEffect } from 'react';
import './App.css';
import Container from './components/styled/Container.styled';
import SideMenu from './components/styled/SideMenu.styled';
import MainContent from './components/styled/Main.styled';
import logo from './assets/logo.png';
import discoverIcon from './assets/discover-icon.png';
import menuIcon from './assets/menu-icon.png';
import albumsIcon from './assets/albums-icon.png';
import likedIcons from './assets/liked-icons.png';
import artistsIcon from './assets/artists-icon.png';
import folderIcon from './assets/folder-icon.png';
import playlistIcon from './assets/playlist-icon.png';
import searchIcon from './assets/search.svg';
import alertIcon from './assets/alertIcon.svg';
import settingsIcon from './assets/settingsIcon.svg';
import profile from './assets/profile.png';
import playIcon from './assets/play.svg';
import playColored from './assets/play_colored.svg';
import SecondaryHeading from './components/styled/SecondaryHeading.styled';
import MusicContainer from './components/styled/MusicContainer.styled';
import Card from './components/styled/Card.styled';
import card1 from './assets/card1.svg';
import card2 from './assets/card2.svg';
import card3 from './assets/card3.svg';
import RecommendedSongs from './components/styled/RecommendedSongs.styled';
import SongListItem, {
  SongListDark,
} from './components/styled/SongList.style';
import {
  SmallPlayButton,
  LargePlayButton,
} from './components/styled/PlayButton.styled';
import song1 from './assets/song1.svg';
import song2 from './assets/song2.svg';
import song3 from './assets/song3.svg';
import listen1 from './assets/listen1.svg';
import listen2 from './assets/listen2.svg';
import listen3 from './assets/listen3.svg';
import listen4 from './assets/listen4.svg';
import Player from './components/styled/Player.styled';
import reverse from './assets/fast-forward.svg';
import forward from './assets/forward.svg';
import NormalTextLight from './components/styled/NormalTextLight.styled';
import PlayerControls from './components/styled/PlayerControls.styled';
import ForwardReverse from './components/styled/ForwardReverse.styled';
import Slider from './components/styled/Slider.styled';
import HamburgerMenu from './components/Hamburger';
function App() {
  useEffect(() => {
    document.title = 'Music APP';
  }, []);
  return (
    <Container>
      <SideMenu id="side-menu">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="side-menu__contents">
          <ul className="side-menu__container">
            <li>Menu</li>
            <li>
              <a href="/">
                <img src={discoverIcon} alt="discover" />
                <span>Discover</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={menuIcon} alt="discover" />
                <span>Menu</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={albumsIcon} alt="discover" />
                <span>Albums</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={likedIcons} alt="discover" />
                <span>Liked</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={artistsIcon} alt="discover" />
                <span>Artists</span>
              </a>
            </li>
          </ul>

          <ul className="side-menu__container">
            <li>My Music</li>
            <li>
              <a href="/">
                <img src={menuIcon} alt="Recently Played" />
                <span>Recently Played</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={likedIcons} alt="Favourite Song" />
                <span>Favourite Song</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={folderIcon} alt="Local File" />
                <span>Local File</span>
              </a>
            </li>
          </ul>

          <ul className="side-menu__container">
            <li>Playlist</li>
            <li>
              <a href="/">
                <img src={playlistIcon} alt="Top 40 Song" />
                <span>Top 40 Song</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={playlistIcon} alt="Hot Classical Song" />
                <span>Hot Classical Song</span>
              </a>
            </li>
            <li>
              <a href="/">
                <img src={playlistIcon} alt="Latest Folk Song" />
                <span>Latest Folk Song</span>
              </a>
            </li>
          </ul>
        </div>
      </SideMenu>
      <MainContent>
        <div className="hero">
          {/* <HamburgerMenu /> */}
          <div className="featured__song">
            <button className="featured_song_button">
              Featured Song Of This Month
            </button>
            <span className="song__name">Love me like you do</span>
            <span className="artist__name">Ellie Goulding</span>
            <LargePlayButton>
              <img src={playIcon} alt="play" />
            </LargePlayButton>
          </div>
        </div>
        <div className="top-right__menu">
          <ul>
            <li>
              <a href="">
                <img src={searchIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={alertIcon} alt="" />
              </a>
            </li>

            <li>
              <a href="">
                <img src={settingsIcon} alt="" />
              </a>
            </li>
          </ul>
          <img className="user" src={profile} alt="profile" />
        </div>
        <MusicContainer>
          <div className="featured__song__container">
            <div className="heading">
              <SecondaryHeading>Featured Song</SecondaryHeading>
              <span className="horizontal-separator"></span>
              <div className="controls">
                <button className="leftIcon"></button>
                <button className="rightIcon"></button>
              </div>
            </div>

            <Slider>
              <Card>
                <div className="song__cover">
                  <img src={card1} alt="" />
                </div>
                <div className="card__info">
                  <span className="card__song-name">Sound Wave</span>
                  <span className="card__artist-name">
                    Alen Walker
                  </span>
                </div>
              </Card>

              <Card>
                <div className="song__cover">
                  <img src={card2} alt="" />
                </div>
                <div className="card__info">
                  <span className="card__song-name">Sound Wave</span>
                  <span className="card__artist-name">
                    Alen Walker
                  </span>
                </div>
              </Card>

              <Card>
                <div className="song__cover">
                  <img src={card3} alt="" />
                </div>
                <div className="card__info">
                  <span className="card__song-name">Sound Wave</span>
                  <span className="card__artist-name">
                    Alen Walker
                  </span>
                </div>
              </Card>
            </Slider>
            <SecondaryHeading>Recommended Songs</SecondaryHeading>
            <RecommendedSongs>
              <SongListItem>
                <img src={song1} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton>
                  <img src={playIcon} alt="play" />
                </SmallPlayButton>
              </SongListItem>

              <SongListItem>
                <img src={song2} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton>
                  <img src={playIcon} alt="play" />
                </SmallPlayButton>
              </SongListItem>

              <SongListItem>
                <img src={song3} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton>
                  <img src={playIcon} alt="play" />
                </SmallPlayButton>
              </SongListItem>
            </RecommendedSongs>
          </div>
          <div className="listening__history">
            <div className="heading">
              <SecondaryHeading>Listening History</SecondaryHeading>
            </div>
            <div className="history">
              <SongListDark>
                <img src={listen1} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton theme="dark">
                  <img src={playColored} alt="play" />
                </SmallPlayButton>
              </SongListDark>

              <SongListDark>
                <img src={listen2} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton theme="dark">
                  <img src={playColored} alt="play" />
                </SmallPlayButton>
              </SongListDark>

              <SongListDark>
                <img src={listen3} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton theme="dark">
                  <img src={playColored} alt="play" />
                </SmallPlayButton>
              </SongListDark>

              <SongListDark>
                <img src={listen4} alt="song" />
                <span className="song__name">Say Sorry</span>
                <span className="artist__name">Alen Walker</span>
                <span className="time">4:00</span>
                <SmallPlayButton theme="dark">
                  <img src={playColored} alt="play" />
                </SmallPlayButton>
              </SongListDark>
            </div>
            <Player>
              <button className="player__avatar">
                <img src={song3} alt="" />
              </button>
              <SecondaryHeading>Never Come</SecondaryHeading>
              <NormalTextLight>John Valley</NormalTextLight>
              <PlayerControls>
                <ForwardReverse>
                  <img src={reverse} alt="button" />
                </ForwardReverse>
                <SmallPlayButton>
                  {' '}
                  <img src={playIcon} alt="" />
                </SmallPlayButton>

                <ForwardReverse>
                  <img src={forward} alt="button" />
                </ForwardReverse>
              </PlayerControls>
            </Player>
          </div>
        </MusicContainer>
      </MainContent>
    </Container>
  );
}

export default App;
