const { getSpotifyTrackDetails } = require('./spotifyService');
const { searchYouTubeTrack } = require('./youtubeService');

async function convertPlaylist(sourceService, targetService, playlist) {
  if (sourceService === 'spotify' && targetService === 'youtube') {
    const tracks = await Promise.all(
      playlist.map(async (track) => {
        const trackDetails = await getSpotifyTrackDetails(track.id);
        const youtubeTrack = await searchYouTubeTrack(trackDetails.title, trackDetails.artist);
        return youtubeTrack;
      })
    );
    return tracks;
  }

  // Placeholder: handle other conversions
  return playlist;
}

module.exports = { convertPlaylist };
