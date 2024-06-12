import { DialogTitle } from "@headlessui/react";
import { Ticket } from "@prisma/client";

export default function ModalContent({ticket}:{ticket:Ticket}) {
    

    return <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
        {ticket.title}
    </DialogTitle>
    <div className="mt-2">
        <p className="text-sm text-gray-500">
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
        </p>
    </div>
    <div className="mt-2">
        <p className="text-sm text-gray-500">
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
        </p>
    </div>
    <div className="mt-2">
        <p className="text-sm text-gray-500">
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
        </p>
    </div>
    <div className="mt-2">
        <p className="text-sm text-gray-500">
            Are you sure you want to deactivate your account? All of your data will be permanently
            removed. This action cannot be undone.
        </p>
    </div>
</div>
}