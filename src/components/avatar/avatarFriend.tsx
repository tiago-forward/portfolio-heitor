interface AvatarFriendProps {
  id: number
  url: string
  label: string
}

export function AvatarFriend({ id, url, label }: AvatarFriendProps) {
  return (
    <div
      key={id}
      className="group flex cursor-pointer items-center gap-4 p-2 hover:bg-[#e8edf928]"
    >
      <div className="relative my-2 w-16 rounded-full border border-black hover:text-white">
        <img
          src={url}
          alt={label}
          className="rounded-full border-4 border-[#e9b874] opacity-40 group-hover:opacity-60"
        />
      </div>
      <div className="flex flex-col">
        <span
          className="font-bold text-client-TextSecondary opacity-30 group-hover:opacity-60"
          title="Nome"
        >
          {label}
        </span>
        <div className="flex items-center gap-2">
          <span className="mt-1 text-client-TextSecondary opacity-40 group-hover:opacity-60">
            Offlile
          </span>
        </div>
      </div>
    </div>
  )
}
