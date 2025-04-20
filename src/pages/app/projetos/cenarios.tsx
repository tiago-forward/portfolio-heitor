import { X } from "lucide-react";
import { useState } from "react";
// import { FaGithub } from "react-icons/fa";
// import { TbNavigationShare } from "react-icons/tb";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { meusCenarios } from "@/constants/index";
import { useMainHeight } from "@/hooks/useMainHeight";
import { usePlayAudioOnHover } from "@/hooks/usePlayAudioOnHover";
import { usePlayAudioOnClick } from "@/hooks/usePlayAudioOnClick";
import hoverSound from "@/assets/audio/Audio-collection.wav";
import openSound from "@/assets/audio/Audio-open-collection.wav";
import closeSound from "@/assets/audio/Audio-close-collection.wav";

export function Cenarios() {
  const mainHeight = useMainHeight(180);

  const playHoverSound = usePlayAudioOnHover(hoverSound);
  const playOpenSound = usePlayAudioOnClick(openSound);
  const playCloseSound = usePlayAudioOnClick(closeSound);

  const [filteredProjects, setFilteredProjects] = useState(() =>
    meusCenarios.filter((art) => art.status.includes("todos")),
  );

  function handleChangeState(
    status: "todos" | "desenvolvimento" | "finalizado",
  ) {
    const filtered = meusCenarios.filter((cert) =>
      cert.status.includes(status),
    );
    setFilteredProjects(filtered);
  }

  function handleOpenSound() {
    playOpenSound();
  }

  function handleCloseSound() {
    playCloseSound();
  }

  return (
    <main
      style={{ maxHeight: mainHeight }}
      className="grid flex-1 justify-center gap-8 overflow-y-auto md:grid-cols-4"
    >
      <div className="col-span-1">
        <RadioGroup
          defaultValue="todos"
          onValueChange={handleChangeState}
          className="flex flex-col items-start gap-0"
        >
          <div className="ml-2 flex w-[95%] items-center gap-4 pl-1 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="todos"
              id="r1"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-client-InputRadio"
            />
            <Label
              htmlFor="r1"
              className="flex-1 cursor-pointer py-2 uppercase text-client-TextSecondary"
            >
              Todos
            </Label>
          </div>
          {/* <div className="ml-2 pl-1 flex w-[95%] items-center gap-4 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="desenvolvimento"
              id="r2"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-client-InputRadio"
            />
            <Label
              htmlFor="r2"
              className="flex-1 cursor-pointer py-2 uppercase text-client-TextSecondary"
            >
              Desenvolvimento
            </Label>
          </div>
          <div className="ml-2 pl-1 flex w-[95%] items-center gap-4 hover:bg-[#e8edf928]">
            <RadioGroupItem
              value="finalizado"
              id="r3"
              className="rotate-45 rounded-none border border-[#e9b874] bg-aside-bg text-client-InputRadio"
            />
            <Label
              htmlFor="r3"
              className="flex-1 cursor-pointer py-2 uppercase text-client-TextSecondary"
            >
              Finalizado
            </Label>
          </div> */}
        </RadioGroup>
      </div>
      <div className="col-span-1 md:col-span-3">
        <ul className="flex flex-wrap items-center gap-2">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className="relative m-auto flex cursor-pointer flex-col flex-wrap items-center gap-4 opacity-80 hover:opacity-100"
              onMouseEnter={playHoverSound}
              onClick={handleOpenSound}
            >
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="border border-[#e9b874] border-opacity-30 shadow-inner shadow-black hover:border-[#e9b874] hover:border-opacity-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-80 border border-zinc-800 shadow-inner shadow-black hover:border-[#e9b874]"
                    />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent className="flex flex-col items-center border-[#e9b874] bg-aside-bg px-0 pt-0 sm:min-w-[700px] sm:rounded-none">
                  <AlertDialogHeader className="relative space-y-0">
                    <AlertDialogTitle className="absolute bottom-0 left-1/2 m-auto w-4/5 -translate-x-2/4 border-b border-[#83612b] text-center text-xl uppercase tracking-wider text-client-TextSecondary">
                      {project.title}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      <div>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="mb-10 max-h-[80vh] w-full"
                        />
                      </div>
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <div className="flex items-center gap-8">
                      {/* <a
                        href={project.repositoryUrl}
                        target="_blank"
                        className="flex gap-1 opacity-80 text-client-TextPrimary hover:text-client-TextSecondary hover:opacity-100"
                        rel="noreferrer"
                      >
                        <FaGithub size={18} />
                        <span>Repositório</span>
                      </a> */}
                      {/* {project.projectUrl && (
                        <a
                          key={project.id}
                          href={project.projectUrl}
                          target="_blank"
                          className="flex gap-1 opacity-80 text-client-TextPrimary hover:text-client-TextSecondary hover:opacity-100"
                          rel="noreferrer"
                        >
                          <TbNavigationShare size={18} />
                          <span>Projeto</span>
                        </a>
                      )} */}
                    </div>
                  </AlertDialogFooter>
                  <AlertDialogCancel
                    className="absolute right-2 top-2 h-8 rounded-sm border-none bg-aside-bg p-0 text-client-TextSecondary opacity-80 hover:bg-aside-bg hover:text-client-TextSecondary hover:opacity-100"
                    onClick={handleCloseSound}
                  >
                    <X size={30} className="p-1" />
                  </AlertDialogCancel>
                </AlertDialogContent>
              </AlertDialog>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
