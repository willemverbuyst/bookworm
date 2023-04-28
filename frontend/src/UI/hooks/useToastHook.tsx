import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useActions } from "../../business/overmind";

type ToastState = {
  title?: string;
  description: string;
  status: "info" | "warning" | "success" | "error";
  position?:
    | "top"
    | "bottom"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
};

export function useToastHook() {
  const { resetApiResponse } = useActions().api;
  const [state, setState] = useState<ToastState>({
    description: "",
    status: "info",
  });
  const toast = useToast();

  useEffect(() => {
    if (state.description && state.status) {
      const { title, description, status, position } = state;

      toast({
        title,
        description,
        status,
        duration: 2500,
        position: position || "top",
        isClosable: true,
      });

      resetApiResponse();
    }
  }, [state.description, state.status, toast]);

  return [state, setState] as const;
}
