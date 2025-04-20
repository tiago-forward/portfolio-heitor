import { ReactNode } from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiNodejsLine } from "react-icons/ri";
import {
  SiFastify,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

export interface hardSkillsProps {
  id: string;
  title: string;
  icon: ReactNode;
}

export const hardSkills: hardSkillsProps[] = [
  {
    id: uuidv4(),
    title: "HTML",
    icon: (
      <FaHtml5 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "CSS",
    icon: (
      <FaCss3 className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "JavaScript",
    icon: (
      <FaJs className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "TypeScript",
    icon: (
      <SiTypescript className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "React",
    icon: (
      <FaReact className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "StyledComponents",
    icon: (
      <SiStyledcomponents className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "TailwindCSS",
    icon: (
      <SiTailwindcss className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "Nextjs",
    icon: (
      <RiNextjsFill className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "Nodejs",
    icon: (
      <RiNodejsLine className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
  {
    id: uuidv4(),
    title: "Fastfy",
    icon: (
      <SiFastify className="flex h-[200px] w-60 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]" />
    ),
  },
];

import ImageCertificate1 from "@/assets/certificate/NASA Space Apps Challenge.jpg";

export interface CertificatesProps {
  id: string;
  title: string;
  image: string;
  status: "concluidos"[];
  link: string;
  foundation: string;
}

export const certificates: CertificatesProps[] = [
  {
    id: uuidv4(),
    title: "NASA Space Apps Challenge",
    image: ImageCertificate1,
    status: ["concluidos"],
    link: "https://www.spaceappschallenge.org/",
    foundation: "NASA",
  },
];

import Cenario1 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_computer_lab_seamlessly_ble_cdfe5e3e-d071-4b3b-bdb1-02142fa94044.png";
import Cenario2 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_entrance_gate_serving_as_th_f2140fcd-5ced-4014-9365-735cc736bee5.png";
import Cenario3 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_library_filled_with_towerin_28f48c0c-5e06-4cd5-85c8-ea375c17c1d5.png";
import Cenario4 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_library_filled_with_towerin_8a0cc7ee-02f6-4619-9b91-f7b84895b309.png";
import Cenario5 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_library_filled_with_towerin_8c92c3a9-b521-4297-af73-94b06be53f2b.png";
import Cenario6 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_reception_hall_serving_as_t_8d85540c-2e83-4174-9510-6fe29df190bc.png";
import Cenario7 from "@/assets/Cenarios/heitorsilvasantos_A_grand_enchanted_theater_interior_designed_w_e4ab792a-1f3d-4eb5-8e07-16624b0359b1 (1).png";
import Cenario8 from "@/assets/Cenarios/heitorsilvasantos_A_long_enchanted_corridor_with_multiple_doors_07de0588-46ec-4936-966a-1a22f367cd5f.png";
import Cenario9 from "@/assets/Cenarios/heitorsilvasantos_A_long_enchanted_corridor_with_multiple_doors_3bcd5fd6-dc01-4c64-8d5b-400ef853a713.png";
import Cenario10 from "@/assets/Cenarios/heitorsilvasantos_A_long_enchanted_corridor_with_multiple_doors_bdce2561-4273-4d58-b396-0f116e213cd6.png";
import Cenario11 from "@/assets/Cenarios/heitorsilvasantos_A_long_enchanted_corridor_with_multiple_doors_d0f1a55b-3b34-4e92-ae46-3d2b9fbd7f39.png";
import Cenario12 from "@/assets/Cenarios/heitorsilvasantos_A_whimsical_enchanted_food_park_seamlessly__93a787a8-249e-4b62-80cd-6eab45fe7a11_0.png";
import Cenario13 from "@/assets/Cenarios/heitorsilvasantos_A_whimsical_enchanted_food_park_seamlessly__93a787a8-249e-4b62-80cd-6eab45fe7a11_3.png";
import Cenario14 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runGwT7NlsMB-M_A_reimagined_version_c46b205d-8c5b-47ee-b950-d988dcc22c24.png";
import Cenario15 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runUpF0_3zGojA_URL_IMAGEM_REFERENCI_74b5776f-8283-498e-a6b8-0602dddac3d6.png";
import Cenario16 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runVidGuxflAI8_A_reimagined_version_31df2ba3-891b-4c74-ae08-43976e08cd13 (1).png";
import Cenario17 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runVidGuxflAI8_A_reimagined_version_848c8cde-5984-4ecc-9e77-0723758104cf.png";
import Cenario18 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.rund102b-HGIIE_A_reimagined_version_1247ad4f-4f60-4366-b4c3-15de0deae104 (1).png";
import Cenario19 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.rund102b-HGIIE_A_reimagined_version_228c4577-c1b8-46ec-82d0-b7fcc59353a6.png";
import Cenario20 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.rundx4SuMEWPSk_A_reimagined_version_db160b02-415e-4f1e-a836-62ea1afd19b8.png";
import Cenario21 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runwbb32BuWyrQ_A_reimagined_version_147e8e43-9e9e-4828-af75-cb62fae06e3a.png";
import Cenario22 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runwbb32BuWyrQ_A_reimagined_version_2e334575-c23d-4a64-8ae2-4cdada004796.png";
import Cenario23 from "@/assets/Cenarios/heitorsilvasantos_httpss.mj.runwbb32BuWyrQ_A_reimagined_version_ae0fb748-370a-40ec-bcea-fec6b0bdeae7.png";

export const meusCenarios = [
  {
    id: uuidv4(),
    title: "1",
    image: Cenario1,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "2",
    image: Cenario2,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "3",
    image: Cenario3,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "4",
    image: Cenario4,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "5",
    image: Cenario5,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "6",
    image: Cenario6,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "7",
    image: Cenario7,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "8",
    image: Cenario8,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "9",
    image: Cenario9,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "10",
    image: Cenario10,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "11",
    image: Cenario11,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "12",
    image: Cenario12,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "13",
    image: Cenario13,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "14",
    image: Cenario14,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "15",
    image: Cenario15,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "16",
    image: Cenario16,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "17",
    image: Cenario17,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "18",
    image: Cenario18,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "19",
    image: Cenario19,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "20",
    image: Cenario20,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "21",
    image: Cenario21,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "22",
    image: Cenario22,
    status: ["todos"],
  },
  {
    id: uuidv4(),
    title: "23",
    image: Cenario23,
    status: ["todos"],
  },
];

import Image1 from "@/assets/Artes Digitais/adasd.png";
import Image2 from "@/assets/Artes Digitais/Arte DinoStone.png";
import Image3 from "@/assets/Artes Digitais/asset asteroid.png";
import Image4 from "@/assets/Artes Digitais/daniel.png";
import Image5 from "@/assets/Artes Digitais/diego.png";
import Image6 from "@/assets/Artes Digitais/f166710647.png";
import Image7 from "@/assets/Artes Digitais/gd.png";
import Image8 from "@/assets/Artes Digitais/khj.png";
import Image9 from "@/assets/Artes Digitais/Lunario.png";
import Image10 from "@/assets/Artes Digitais/mapa final.png";
import Image11 from "@/assets/Artes Digitais/nave.png";
import Image12 from "@/assets/Artes Digitais/personagem protagonista.png";
import Image13 from "@/assets/Artes Digitais/Prancheta 1.png";
import Image14 from "@/assets/Artes Digitais/s.png";
import Image15 from "@/assets/Artes Digitais/salvar como personagens.png";
import Image16 from "@/assets/Artes Digitais/sda123.png";
import Image17 from "@/assets/Artes Digitais/zarak.png";

export const artesDigitais = [
  {
    id: uuidv4(),
    title: "adasd",
    image: Image1,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Arte DinoStone",
    image: Image2,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "asset asteroid",
    image: Image3,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "daniel",
    image: Image4,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "diego",
    image: Image5,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "f166710647",
    image: Image6,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "gd",
    image: Image7,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "khj",
    image: Image8,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Lunario",
    image: Image9,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "mapa final",
    image: Image10,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "nave",
    image: Image11,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "personagem protagonista",
    image: Image12,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Prancheta 1",
    image: Image13,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "s",
    image: Image14,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "salvar como personagens",
    image: Image15,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "sda123",
    image: Image16,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "zarak",
    image: Image17,
    status: ["todos"],
    link: "",
  },
];

import Video1 from "@/assets/Animações/videos/1.mp4";
import Video2 from "@/assets/Animações/videos/2.mp4";
import Video3 from "@/assets/Animações/videos/3.mp4";
import Video4 from "@/assets/Animações/videos/4.mp4";
import Video5 from "@/assets/Animações/videos/5.mp4";
import Video6 from "@/assets/Animações/videos/6.mp4";
import Video7 from "@/assets/Animações/videos/7.mp4";
import Video8 from "@/assets/Animações/videos/8.mp4";
import Video9 from "@/assets/Animações/videos/9.mp4";
import Video10 from "@/assets/Animações/videos/10.mp4";
import Video11 from "@/assets/Animações/videos/11.mp4";

export const animacoes = [
  {
    id: uuidv4(),
    title: "1",
    video: Video1,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "2",
    video: Video2,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "3",
    video: Video3,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "4",
    video: Video4,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "5",
    video: Video5,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "6",
    video: Video6,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "7",
    video: Video7,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "8",
    video: Video8,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "9",
    video: Video9,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "10",
    video: Video10,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "11",
    video: Video11,
    status: ["todos"],
    link: "",
  },
];

import Pdf1 from "@/assets/Level_Design/Level Heitor Inacabado.pdf";
import ImagePdf1 from "@/assets/Level_Design/Level Heitor Inacabado.png";

import Design1 from "@/assets/Level_Design/Prancheta 1.png";
import Design2 from "@/assets/Level_Design/mapa mund.png";
import Design3 from "@/assets/Level_Design/mapa mund2.png";
import Design4 from "@/assets/Level_Design/mapa mundi final.png";
import Design5 from "@/assets/Level_Design/level 1.png";
import Design6 from "@/assets/Level_Design/level 2.png";
import Design7 from "@/assets/Level_Design/f1223783.png";
import Design8 from "@/assets/Level_Design/reiner level.png";

export const levelDesign = [
  {
    id: uuidv4(),
    title: "Prancheta 1",
    design: Pdf1,
    imagem: ImagePdf1,
    status: ["pdf"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Prancheta 1",
    design: Design1,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "mapa mund",
    design: Design2,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "mapa mund2",
    design: Design3,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "mapa mundi final",
    design: Design4,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "level 1",
    design: Design5,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "level 2",
    design: Design6,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "f1223783",
    design: Design7,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "reiner level",
    design: Design8,
    status: ["todos"],
    link: "",
  },
];

import Model1 from "@/assets/modelagens/bico-jao.webm";
import Model2 from "@/assets/modelagens/bixo-linguiça.webm";
import Model3 from "@/assets/modelagens/bixo-panqueca.webm";
import Model4 from "@/assets/modelagens/bixo.webm";
import Model5 from "@/assets/modelagens/bixopedra.webm";
import Model6 from "@/assets/modelagens/naninhamatadora.webm";

export const modelagens = [
  {
    id: uuidv4(),
    title: "Bico Jao",
    video: Model1,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Bixo Linguiça",
    video: Model2,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Bixo Panqueca",
    video: Model3,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Bixo",
    video: Model4,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Bixo Pedra",
    video: Model5,
    status: ["todos"],
    link: "",
  },
  {
    id: uuidv4(),
    title: "Naninha Matadora",
    video: Model6,
    status: ["todos"],
    link: "",
  },
];
