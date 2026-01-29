"use client"

import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import { WarpGenerator } from "@/components/warp-generator"
import { Badge } from "@/components/ui/badge"
import { RiTelegram2Line } from "react-icons/ri"

export default function Home() {
  const [showNewFormatsAlert, setShowNewFormatsAlert] = useState(false)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full bg-lime-500">
      {showNewFormatsAlert && (
        <Alert className="mb-6 break-words bg-lime-100 border-lime-300">
          <AlertTitle className="flex items-center gap-2 text-lime-900">
            <Info className="w-5 h-5" />
            Новые форматы конфигураций
            <Badge variant="secondary" className="ml-2">Новое</Badge>
          </AlertTitle>

          <AlertDescription className="break-words mt-3 text-lime-800">
            Добавлена поддержка новых форматов: <strong>Throne</strong>, <strong>Clash</strong>, <strong>NekoRay/Exclave</strong>, <strong>Husi</strong>, <strong>Karing/Hiddify</strong>
          </AlertDescription>

          <Button
            variant="ghost"
            size="sm"
            className="mt-2 h-auto p-0 text-xs text-lime-700 hover:text-lime-900"
            onClick={() => setShowNewFormatsAlert(false)}
          >
            Скрыть уведомление
          </Button>
        </Alert>
      )}

      <div className="flex flex-col items-center justify-center gap-6 w-[300px] bg-lime-400 p-6 rounded-2xl shadow-xl">
        <WarpGenerator />

        <Button asChild variant="secondary" className="w-full">
          <a href="https://t.me/verybad_lyy" target="_blank">
            <RiTelegram2Line /> Telegram канал
          </a>
        </Button>
      </div>
    </main>
  )
}
