import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
export function ResultsViewSwitch({ listOrGridView, setListOrGridView }) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={true}
      exclusive
      onChange={() => {
        setListOrGridView((v) => !v);
      }}
    >
      <ToggleButton value={listOrGridView} title="List View">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value={!listOrGridView} title="Grid View">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
