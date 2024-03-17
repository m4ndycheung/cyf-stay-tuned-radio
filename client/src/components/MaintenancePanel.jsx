import SpotifyFirstRunButton from "./SpotifyFirstRunButton";
import UpdateSpotifyPlaylistButton from "./UpdateSpotifyPlaylistButton";

export default function MaintenancePanel({ userRole }) {
  return (
    <>
      <UpdateSpotifyPlaylistButton userRole={userRole} />
      <SpotifyFirstRunButton />
    </>
  );
}
