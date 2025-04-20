import { createBrowserRouter, Navigate } from "react-router-dom";

import { AppLayout } from "./pages/_layouts/app";
import { ClientLayount } from "./pages/_layouts/client";
import { Carreira } from "./pages/app/formacoes/carreira";
import { ClientFormacoes } from "./pages/app/formacoes/clientFormacoes";
import { ClientHabilidades } from "./pages/app/habilidades/clientHabilidades";
import { HardSkills } from "./pages/app/habilidades/hardSkills";
import { SoftSkills } from "./pages/app/habilidades/softSkills";
import { ClientGeral } from "./pages/app/inicio/clientGeral";
import { ClientGithub } from "./pages/app/inicio/clientGithub";
import { ClientProjetos } from "./pages/app/projetos/clientProjetos";
import { LevelDesign } from "./pages/app/projetos/levelDesign";
import { ClientSobre } from "./pages/app/sobre/clientSobre";
import { Historia } from "./pages/app/sobre/historia";
import { Animacoes } from "./pages/app/projetos/animacoes";
import { ArtesDigitais } from "./pages/app/projetos/artesDigitais";
import { Cenarios } from "./pages/app/projetos/cenarios";
import { Modelagens } from "./pages/app/projetos/modelagens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <ClientLayount />,
        children: [
          { path: "/", element: <ClientGeral /> },
          { path: "/github", element: <ClientGithub /> },
          {
            path: "/sobre",
            element: <ClientSobre />,
            children: [
              { index: true, element: <Navigate to="historia" replace /> },
              { path: "historia", element: <Historia /> },
            ],
          },
          {
            path: "/habilidades",
            element: <ClientHabilidades />,
            children: [
              { index: true, element: <Navigate to="hard-skills" replace /> },
              { path: "hard-skills", element: <HardSkills /> },
              { path: "soft-skills", element: <SoftSkills /> },
            ],
          },
          {
            path: "/formacoes",
            element: <ClientFormacoes />,
            children: [
              { index: true, element: <Navigate to="carreira" replace /> },
              { path: "carreira", element: <Carreira /> },
            ],
          },
          {
            path: "/projetos",
            element: <ClientProjetos />,
            children: [
              { index: true, element: <Navigate to="cenarios" replace /> },
              { path: "cenarios", element: <Cenarios /> },
              { path: "animacoes", element: <Animacoes /> },
              { path: "modelagens", element: <Modelagens /> },
              { path: "artes-digitais", element: <ArtesDigitais /> },
              { path: "level-design", element: <LevelDesign /> },
            ],
          },
        ],
      },
    ],
  },
]);
