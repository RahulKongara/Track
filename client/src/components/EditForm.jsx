import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { ChevronDownIcon } from "lucide-react";
import {
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from "./ui/dialog";
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "./ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "./ui/select";
import { Calendar } from './ui/calendar';
import { Button } from "./ui/button";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
    FieldTitle
} from "./ui/field";
import { Input } from "./ui/input";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner";
import { ScrollArea } from "./ui/scroll-area";

const formSchema = z.object({
    name: z.string().min(3, "Come on!!! man is yo name really 3 frickking letters?").max(15, "Yo! tell yo parents to change yo name yo!"),
    dob: z.date().min(1, "Please choose when you were born").refine((val) => val !== "auto", {
        message: "Auto-detection is disabled. Working on it...Please enter dob"
    }),
    weight: z.number().min(10, "If u 10 kgs keep this device aside and eat a full plate biryani man! (no offense)").max(200, "Sorry for the inconvenience but my database can't handle all tat weight"),
    height: z.number().min(50, "If u 50 cm (no offense) try higher number for efficiency").max(200, "Sorry for the inconvenience but my database can't handle that tall avatars Mr. Jake Sully"),
    level: z.string().min(1, "You must select a level to continue...")
})


const levels = [
    { id: 'Beginner', title: 'Beginner', description: 'If you are just starting out about 0-1 yrs.' },
    { id: 'Intermediate', title: 'Intermediate', description: 'If you are working consistently for 1-2 yrs.' },
    { id: 'Expert', title: 'Expert', description: 'Really experienced for about 3+ yrs.' },
];



const EditForm = ({ user, onSuccess }) => {

    const [open, setOpen] = useState(false);
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: user?.name || "",
            level: user?.level || "Beginner",
            weight: user?.weight || 60,
            height: user?.height || 170,
            dob: user?.dob ? new Date(user.dob) : undefined
        }
    });

    const onSubmit = async (data) => {
        console.log(data);
        // API endpoint access
        const token = localStorage.getItem('token');

        if (!token) {
            Navigate("/login");
            return;
        }

        const res = await fetch('/api/editProfile', {
            method: 'PUT', 
            headers: {
                Authorization: `Bearer ${token}`
            },
            body: {
                
            }
        })
        onSuccess?.();
    }


    return (
        <div>
            <form action="" onSubmit={form.handleSubmit(onSubmit)} id="edit-form">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you&apos;re
                        done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    <ScrollArea className={`h-[60vh] `}>

                        <FieldGroup>
                            <Controller
                                name="name"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="name">Name</FieldLabel>
                                        <Input {...field} id="name" type="text" aria-invalid={fieldState.invalid} />
                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                    </Field>
                                )}
                            />

                            {/* <div className="grid gap-3">
                            <label htmlFor="name-1">Name</label>
                            <Input id="name-1" name="name" defaultValue={user.name} {...register("name")} />
                        </div> */}
                            <Controller
                                name="dob"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="dob">Date of Birth (DOB)</FieldLabel>
                                        <Popover open={open} onOpenChange={setOpen}>
                                            <PopoverTrigger asChild>
                                                <Button variant='outline' id="dob" className={`w-48 justify-between font-normal`}>
                                                    {field.value ? new Date(field.value).toLocaleDateString() : "Select Date"}
                                                    <ChevronDownIcon />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className={`w-auto overflow-hidden bg-gray-900 p-0`} align='start'>
                                                <Calendar
                                                    mode="single"
                                                    className={`bg-gray-800 text-white`}
                                                    selected={field.value}
                                                    captionLayout='dropdown'
                                                    onSelect={(date) => {
                                                        field.onChange(date)
                                                        setOpen(false)
                                                    }}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="weight"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="weight">Weight (kg)</FieldLabel>
                                        <Input
                                            {...field}
                                            id="weight"
                                            type="number"
                                            aria-invalid={fieldState.invalid}
                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                        />
                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="height"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <Field data-invalid={fieldState.invalid}>
                                        <FieldLabel htmlFor="height">Height (cm)</FieldLabel>
                                        <Input
                                            {...field}
                                            id="height"
                                            type="number"
                                            aria-invalid={fieldState.invalid}
                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                        />
                                        {fieldState.error && (
                                            <FieldError>{fieldState.error.message}</FieldError>
                                        )}
                                    </Field>
                                )}
                            />
                            <Controller
                                name="level"
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <FieldSet>
                                        <FieldLegend>Level</FieldLegend>
                                        <FieldDescription>Choose your level as per your experience.</FieldDescription>
                                        <RadioGroup
                                            name={field.name}
                                            value={field.value}
                                            onValueChange={field.onChange}
                                        >
                                            {levels.map((level) => (
                                                <FieldLabel key={level.id} htmlFor={`${level.id}`}>
                                                    <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                                                        <FieldContent>
                                                            <FieldTitle>{level.title}</FieldTitle>
                                                            <FieldDescription>{level.description}</FieldDescription>
                                                        </FieldContent>
                                                        <RadioGroupItem value={level.id} id={`radio-group-${level.id}`} aria-invalid={fieldState.invalid} />
                                                    </Field>
                                                </FieldLabel>
                                            ))}
                                        </RadioGroup>
                                    </FieldSet>
                                )}
                            />
                            {/* <div className="grid gap-3">
                            <Select>
                                <SelectTrigger className={`w-[180px]`}>
                                    <SelectValue placeholder="Seelct Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Level</SelectLabel>
                                        <SelectItem value="Beginner">Beginner (0-1 yrs)</SelectItem>
                                        <SelectItem value="Intermediate">Intermediate (2-3yrs)</SelectItem>
                                        <SelectItem value="Expert">Expert (4+ yrs)</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div> */}
                        </FieldGroup>
                        <DialogFooter>
							<DialogClose asChild>
								<Button variant="outline">Cancel</Button>
							</DialogClose>
							<Button className='bg-green-600' type="submit" form="edit-form" onClick={() => toast.success('Edit Form sent!')}>Save changes</Button>
						</DialogFooter>
                    </ScrollArea>
                </div>
            </form>

        </div>
    )
}

export default EditForm