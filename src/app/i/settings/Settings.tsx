'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-3 gap-10'>
					<div>
						<Field
							id='email'
							label='Email: '
							placeholder='Enter email: '
							type='email'
							{...register('email', {
								required: 'Email is required!'
							})}
							extra='mb-4'
						/>

						<Field
							id='password'
							label='Пароль: '
							placeholder='Пароль: '
							type='password'
							{...register('password')}
							extra='mb-10'
						/>
					</div>

					<div>
						<Field
							id='name'
							label='Имя: '
							placeholder='Ваше имя: '
							{...register('name')}
							extra='mb-4'
						/>

						<Field
							id='surname'
							label='Фамилия: '
							placeholder='Ваша фамилия: '
							{...register('surname')}
							extra='mb-4'
						/>

						<Field
							id='middlename'
							label='Отчество: '
							placeholder='Ваше отчество: '
							{...register('middlename')}
							extra='mb-4'
						/>
					</div>

					<div>
						<Field
							id='department'
							label='Отдел: '
							placeholder='Отдел: '
							{...register('department')}
							extra='mb-4'
						/>

						<Field
							id='position'
							label='Должность: '
							placeholder='Должность: '
							{...register('position')}
							extra='mb-4'
						/>

						<Field
							id='role'
							label='Роль: '
							placeholder='Роль: '
							{...register('role')}
							extra='mb-4'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Сохранить
				</Button>
			</form>
		</div>
	)
}
