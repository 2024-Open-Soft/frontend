import { useEffect, useRef } from "react"
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '@silvermine/videojs-quality-selector/dist/css/quality-selector.css'
require('@silvermine/videojs-quality-selector')(videojs)

export const VideoPlayer = () => {
    const videoRef = useRef(null)
    useEffect(() => {
        const videoJsOptions = {
        controls: true,
        playbackRates: [0.5, 1, 1.5, 2],
        useActions: {
            doubleClick: true,
            hotkeys: true
        },
        sources: [{
            src: 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
            type: 'application/x-mpegURL',
            selected: navigator && navigator.connection && (navigator.connection.effectiveType === '4g' || navigator.connection.effectiveType === '5g') && true,
            label: '720p'
        },
        {
            src: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
            type: 'video/mp4',
            selected: navigator && navigator.connection && (navigator.connection.effectiveType === '2g' || navigator.connection.effectiveType === '3g') && true,
            label: '360p',
            onselected: function () {
            console.log('selected')
            }
        }],
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
        const player = videojs(videoRef.current, videoJsOptions, function onPlayerReady() {
        console.log('onPlayerReady', this)
        player.currentTime(120)
        })
    }
    , [])
    return (
        <div className="App">
        <div data-vjs-player>
        <video ref={videoRef} className="video-js vjs-default-skin" controls preload="auto"
        style = {{height:"100vh",width:"100%"}}/>
        </div>
        </div>
    );
}