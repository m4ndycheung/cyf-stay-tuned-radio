import { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import SpotifyFirstRunButton from "./SpotifyFirstRunButton";
import UpdateSpotifyPlaylistButton from "./UpdateSpotifyPlaylistButton";

export default function MaintenancePanel({ userRole }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="submit"
        className="btn btn-secondary m-3"
        onClick={() => setOpen(!open)}
        aria-controls="control-collapse-add-song-form"
        aria-expanded={open}
      >
        Maintenance
      </button>
      <div className="rounded container bg-body-tertiary">
        <Collapse in={open}>
          <div>this is hidden</div>
        </Collapse>
        <UpdateSpotifyPlaylistButton userRole={userRole} />
        <SpotifyFirstRunButton />
      </div>
    </>
  );
}
