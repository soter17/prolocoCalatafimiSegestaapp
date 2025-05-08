import React from 'react';
import Map from './Map';
import AdminPanel from './AdminPanel';
import { enforceKillSwitch } from './killSwitch';

enforceKillSwitch();

export default function App() {
  const isAdmin = false; // semplificato
  return isAdmin ? <AdminPanel /> : <Map />;
}
