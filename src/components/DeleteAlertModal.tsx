import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

// import { useToast } from "./ui/use-toast";
import { DeleteData } from "@/shared/commonFunction";

export function DeleteAlertModal({ id, setLoading, refetch, type }: any) {
  //============= hooks
  // const { toast } = useToast();

  async function handleDelete() {
    console.log(id);
    DeleteData(type, id as string, setLoading, refetch);
    // toast({
    //   variant: "destructive",
    //   title: "Deleted Successfully",
    // });
  }

  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will permanently delete
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction
          onClick={handleDelete}
          className="bg-red-600 text-white hover:text-white hover:bg-red-800"
        >
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
