import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface DelegateDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DelegateDialog = ({ open, onOpenChange }: DelegateDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Delegate to The Dutch Pool</DialogTitle>
          <DialogDescription>
            Complete your delegation process below
          </DialogDescription>
        </DialogHeader>
        <div className="h-[70vh] w-full">
          <iframe
            src="https://tool.jamonbread.io/delegate/pool1ksye6zwlzaytspldngc3966aj79zkjvmkykydu2txay75c0krfp"
            className="w-full h-full rounded-md"
            title="Delegation Interface"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DelegateDialog;
