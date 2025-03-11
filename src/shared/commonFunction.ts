import { toast } from "sonner";

///============================ get data
export async function getData(setData: any, reqItem: string, setLoading: any) {
  try {
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${reqItem}`);

    const result = await res.json();

    if (
      reqItem.includes("list?id") ||
      reqItem.includes("event/list?id") ||
      reqItem.includes("user/list?id=")
    ) {
      console.log(result?.data[0], "result");
      setData(result?.data[0]);
    } else {
      console.log(result?.data, "result");
      setData(result?.data || []);
    }

    setLoading(false);
    if (result?.data?.length > 0) {
      return result?.data;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}

//update data ====================================================================

export async function updateData(
  data: any,
  reqItem: string,
  reqId: string,
  setLoading: any,
  refetch?: any
) {
  try {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${reqItem}/update/${reqId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      toast.success("update successfully");
      setLoading(false);
      const data = await res.json();
      if (refetch) {
        refetch();
      }

      return data?.data;
    } else {
      setLoading(false);
      return false;
    }
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}

//============================create data=========================================
export async function createData(
  data: any,
  reqItem: string,
  setLoading: any,
  refetch?: any
) {
  try {
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${reqItem}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const resData = await res.json();

    if (resData.status == "success") {
      setLoading(false);
      if (refetch) {
        refetch();
      }

      return resData?.data;
    } else {
      setLoading(false);
      return false;
    }
  } catch (e) {
    setLoading(false);
  }
}

// delete data ===================================================================
export async function DeleteData(
  reqItem: string,
  reqId: string,
  setLoading: any,
  refetch?: any
) {
  try {
    // const { toast } = useToast();

    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${reqItem}/delete/${reqId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      toast.error("Deleted");
      setLoading(false);
      refetch();

      return true;
    } else {
      setLoading(false);
      return false;
    }
  } catch (error) {
    setLoading(false);
    return false;
  }
}

// log in ========================================================================

export async function getLoginData(userId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}user/list?id=${userId}`
    );
    const result = await res.json();
    if (result) {
      return result?.data[0];
    } else {
      return null;
    }
  } catch (e) {
    console.log(e);
  }
}
