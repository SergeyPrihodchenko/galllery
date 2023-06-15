import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            <div className="mb-4 text-sm text-gray-600">
                Спасибо за регистрацию! Прежде чем начать, не могли бы вы подтвердить свой адрес электронной почты, нажав кнопку
                ссылка, которую мы только что отправили вам по электронной почте? Если вы не получили письмо, мы с радостью вышлем вам другое.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    На адрес электронной почты, который вы указали при регистрации, была отправлена новая ссылка для подтверждения.
                </div>
            )}

            <form onSubmit={submit}>
                <div className="mt-4 flex items-center justify-between">
                    <PrimaryButton disabled={processing}>Выслать повторно письмо для подтверждения</PrimaryButton>

                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Выйти
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}
