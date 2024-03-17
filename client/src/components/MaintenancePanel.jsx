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
          <div className="mx-3 p-3 row">
            <div className="col-sm border p-3">
              <p>Click this button to update spotify playlist</p>
              <UpdateSpotifyPlaylistButton userRole={userRole} />
            </div>
            <div className="col-sm border p-3">
              <p>
                Click this button to get access and refresh token for spotify
                API and populate database
              </p>
              <SpotifyFirstRunButton />
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
}
