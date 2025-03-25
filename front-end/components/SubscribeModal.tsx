import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "./ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "./ui/checkbox"
 
export function SubscribeModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="">Subscribe</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogDescription>
            Subscribe to the latest events of this society via Discord, SMS and Email. Will automati
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <DialogTitle>Notify Me on</DialogTitle>
          <div className="flex items-center gap-4">
            <Label htmlFor="discord" className="text-right">
              Discord
            </Label>
            <Checkbox />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="discord" className="text-right">
              Email
            </Label>
            <Checkbox />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="discord" className="text-right">
              Facebook
            </Label>
            <Checkbox />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}