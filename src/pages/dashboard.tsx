import { useEffect, useState } from "react"
import { Button } from "../components/Buttons"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModel"
import { Plus } from "../assets/icons/plus"
import { Share } from "../assets/icons/share"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import { Logo } from "../assets/icons/Logo"
import axios from "axios"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4">
        <Button onClick={() => {
          setModalOpen(true)
        }}size="md" variant="primary" text="Add content" icononleft={<Plus size="md" />}></Button>
        <Button onClick={async () => {
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                share: true
            }, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
            const shareUrl = `http://localhost:5173/share/${(response.data as { hash: string }).hash}`;
            alert(shareUrl);
        }} size="md" variant="secondary" text="Share brain" icononleft={<Share size="md" />}></Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {contents.map(({ _id, type, link, title }) => (
            <Card 
                key={_id}
                type={type}
                link={link}
                title={title}
            />
        ))}
      </div>
    </div>
  </div>
}