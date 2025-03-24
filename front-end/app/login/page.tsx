import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
 
export default function page() {
  return (
    <main className="flex justify-center p-4 mt-10">
        <Card className="w-1/3">
          <CardHeader>
            <CardTitle>Login with Email</CardTitle>
            <CardDescription>
              Login to browse societies and view your personalised upcoming events. 
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Email</Label>
              <Input id="Email"/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Password</Label>
              <Input type="password" id="username" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Login</Button>
          </CardFooter>
        </Card>
    </main>
  )
}