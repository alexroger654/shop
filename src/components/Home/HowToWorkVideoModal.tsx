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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function HowToWorkVideoModal() {
    return (

        <DialogContent className="w-full lg:min-w-[700px] ">
            <DialogHeader>
                <DialogTitle>HOW WE WORKS</DialogTitle>
            </DialogHeader>
            <div className=" py-4 w-full">
                <div>
                    <iframe className="w-full lg:h-96" src="https://www.youtube.com/embed/wPurmrCIR7E?si=K0QRe4FepqaTLcX_" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
            </div>
            {/* <DialogFooter>
                <Button type="submit">Save changes</Button>
            </DialogFooter> */}
        </DialogContent>

    )
}
