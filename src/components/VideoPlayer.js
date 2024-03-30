import { useEffect, useRef, useState } from "react"
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@silvermine/videojs-quality-selector/dist/css/quality-selector.css'
import { updateHistory } from "../redux/services/History"
require('@silvermine/videojs-quality-selector')(videojs)

export const VideoPlayer = ({ urls, type, timestamp = 0, id }) => {
    const videoRef = useRef(null)
    const [videoPlayer, setVideoPlayer] = useState(null)
    useEffect(() => {
        if (videoPlayer) {
            delete videojs.getPlayers()[videoPlayer.id_]
        }
        const videoJsOptions = {
            controls: true,
            playbackRates: [0.5, 1, 1.5, 2],
            useActions: {
                doubleClick: true,
                hotkeys: true
            },
            controlBar: {
                children: {
                    playToggle: {},
                    volumePanel: {},
                    currentTimeDisplay: {},
                    progressControl: {},
                    remainingTimeDisplay: {},
                    qualitySelector: {},
                    playbackRateMenuButton: {},
                    fullscreenToggle: {},
                }
            },
        }
        if (type === "trailer") {
            videoJsOptions.sources = {
                src: urls[0] || 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
                type: 'application/x-mpegURL',
            }
        } else {
            const labels = ["360p", "720p", "1080p"]
            const selected = [true, false, false]
            if (urls) {
                videoJsOptions.sources = urls?.map((url, index) => {
                    return {
                        src: url,
                        type: 'application/x-mpegURL',
                        label: labels[index],
                        selected: selected[index],
                    }
                })
                console.log(urls?.map((url, index) => {
                    return {
                        src: url.url,
                        type: 'application/x-mpegURL',
                        label: labels[index],
                        selected: selected[index],
                    }
                }))
            }
        }
        const player = videojs(videoRef.current, videoJsOptions, function onPlayerReady() {
            console.log('onPlayerReady', this)
            console.log(timestamp)
            player.currentTime(timestamp*60)
        })
        setVideoPlayer(player)
        if(type === 'watch'){
            setInterval(async() => {
                if(!player.currentTime())
                    clearInterval()
                const res = await updateHistory({
                    movieId: id,
                    timeStamp: Math.floor(player.currentTime()/60)
                })
                if (player.currentTime() === player.duration()) {
                    clearInterval()
                }
                console.log(res)
            }, 1000 * 60)
        }
    }
        , [urls, type])

    return (
        <div data-vjs-player>
            <video ref={videoRef} className="video-js vjs-default-skin" controls preload="auto"
                style={{ height: "100vh", width: "100%" }} />
        </div>
    );
}