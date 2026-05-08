import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { Login } from '../pages/Auth/Login';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { AircraftList } from '../pages/Production/AircraftList';
import { AircraftDetails } from '../pages/Production/AircraftDetails';
import { ManageParts } from '../pages/Production/ManageParts';
import { ManageStages } from '../pages/Production/ManageStages';
import { ExecuteTests } from '../pages/Quality/ExecuteTests';
import { ManageTeam } from '../pages/Administration/ManageTeam';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aeronaves" element={<AircraftList />} />
        <Route path="/aeronaves/:id" element={<AircraftDetails />} />
        <Route path="/aeronaves/:id/pecas" element={<ManageParts />} />
        <Route path="/aeronaves/:id/etapas" element={<ManageStages />} />
        <Route path="/aeronaves/:id/testes" element={<ExecuteTests />} />
        <Route path="/equipe" element={<ManageTeam />} />
      </Route>
    </Routes>
  );
}
