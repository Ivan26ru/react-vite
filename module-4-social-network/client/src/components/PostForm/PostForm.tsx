import {FC, FormEventHandler, useState} from 'react';

import {Button} from '../Button';
import {FormField} from '../FormField';
import './PostForm.css';
import {useMutation} from "@tanstack/react-query";
import {createPost} from "../../api/Post.ts";
import {queryClient} from "../../api/queryClients.ts";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export interface IPostFormProps {
}

const CreatePostShema = z.object({
    text: z.string().min(10, "Длина поста должна быть не менее 10 символов"),
})

export const PostForm: FC<IPostFormProps> = () => {

    type CreatePostForm = z.infer<typeof CreatePostShema>;

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<CreatePostForm>({
        resolver: zodResolver(CreatePostShema)
    });

    const createPostMutation = useMutation({
            mutationFn: createPost,
            onSuccess() {
                queryClient.invalidateQueries({queryKey: ["posts"]})
            }
        },
        queryClient
    );

    return (
        <form
            className="post-form"
            onSubmit={handleSubmit(({text}) => {
                createPostMutation.mutate(text)
            })}
        >

            <FormField label="Текст поста" errorMessage={errors.text?.message}>
                <textarea className="post-form__input"
                    {...register("text")}
                />
            </FormField>

            <Button type="submit" title="Опубликовать" isLoading={createPostMutation.isPending}/>
        </form>
    );
};
