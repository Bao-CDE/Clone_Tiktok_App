import React, { useState, useEffect, useRef } from "react";
import styles from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faComment,
  faShare,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [likes, setLikes] = useState({});
  const videoRefs = useRef([]);

  useEffect(() => {
    fetch("https://684c329aed2578be881e0a0d.mockapi.io/video/api/video")
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  useEffect(() => {
    // Pause all videos except current one
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideoIndex) {
          video.play();
        } else {
          video.pause();
        }
      }
    });
  }, [currentVideoIndex]);
  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollTop;
    const videoHeight = container.clientHeight;
    const newIndex = Math.round(scrollPosition / videoHeight);

    if (newIndex !== currentVideoIndex) {
      setCurrentVideoIndex(newIndex);
    }
  };

  const handlePlay = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const handleLike = (videoId) => {
    setLikes((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  return (
    <div className={styles.container} onScroll={handleScroll}>
      {videos.map((video, index) => (
        <div key={video.id} className={styles.videoWrapper}>
          <div className={styles.video}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.video_url}
              loop
              onClick={() => handlePlay(index)}
              className={styles.videoPlayer}
              playsInline
              muted={index !== currentVideoIndex}
            />
            <div className={styles.videoInfo}>
              <div className={styles.userInfo}>
                <img
                  src={video.avatar}
                  alt={video.user}
                  className={styles.avatar}
                />
                <span className={styles.username}>{video.user}</span>
              </div>
              <div className={styles.description}>
                <p>Video description goes here</p>
                <div className={styles.music}>
                  <FontAwesomeIcon icon={faMusic} />
                  <span>Original Sound</span>
                </div>
              </div>
              <div className={styles.actions}>
                <div
                  className={`${styles.action} ${
                    likes[video.id] ? styles.liked : ""
                  }`}
                  onClick={() => handleLike(video.id)}
                >
                  <FontAwesomeIcon icon={faHeart} />
                  <span>{likes[video.id] ? "666" : "0"}</span>
                </div>
                <div className={styles.action}>
                  <FontAwesomeIcon icon={faComment} />
                  <span>0</span>
                </div>
                <div className={styles.action}>
                  <FontAwesomeIcon icon={faShare} />
                  <span>0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
