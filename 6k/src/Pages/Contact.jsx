import React, { useState } from "react";
import NavFooter from "../Components/NavFooter";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios";

const schema = yup.object().required().shape({
    name: yup.string().required('必須項目です'),
    kana: yup.string().matches(/^[ァ-ヶー　 ]+$/, 'カタカナを入力してください').required('必須項目です'),
    email: yup.string().email('メールアドレスの形式が異なります').required('必須項目です'),
    message: yup.string().required('必須項目です'),
    agreement: yup.bool().oneOf([true], '同意が必要です')
})

export default function Contact(props) {
    const [recaptcha, setRecapthca] = useState(false)
    const onChallenge = (value) => {
        setRecapthca(value != null)
    }
    const {register, formState: {isValid, errors}, getValues} = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            name: '',
            kana: '',
            email: '',
            message: '',
            agreement: false
        }
    })
    const canSubmit = () => {
        if (isValid && recaptcha) return true
        else return false
    }
    const [nowLoading, setNowLoading] = useState(false)
    const submit = () => {
        const url = 'http://localhost:8002/wp-json/wp/6k/nonce'
        setNowLoading(true)
        axios.post(url, {}).then(res => {
            console.log('success', res)
            const nonce = res.data
            const payload = {
                nonce: nonce,
                name: getValues('name'),
                kana: getValues('kana'),
                email: getValues('email'),
    
            }
            const url2 = 'http://localhost:8002/wp-json/wp/6k/contact'
            axios.post(url2, payload).then(res => {
                console.log('success', res)
                setNowLoading(false)
            }).catch(errors => {
                console.log('error', errors)
                setNowLoading(false)
            })
        }).catch(errors => {
            console.log('error', errors)
            setNowLoading(false)
        })
    }
    const submit2 = () => {
        const payload = {
            name: getValues('name'),
            kana: getValues('kana'),
            email: getValues('email'),

        }
        const url = 'http://localhost:8002/wp-json/wp/6k/nonce'
        setNowLoading(true)
        axios.post(url, payload).then(res => {
            console.log('success', res)
            setNowLoading(false)
        }).catch(errors => {
            console.log('error', errors)
            setNowLoading(false)
        })
    }

    return (
        <div className="bg-[#E8E8E8] pt-32 pb-20 relative">

            <div className="fixed z-0 top-0 left-0 w-screen h-screen overflow-hidden">
                <h1 className="absolute top-[calc(50vh-200px)] left-[calc(50vw-760px)] text-transparent text-blur text-[260px] tracking-widest cormorant opacity-40">CONTACT</h1>
            </div>
            <div className="md:w-[768px] mx-auto relative px-4 ">
                <div className="md:max-w-[372px]">
                    <h2 className=" text-sm">お問合せ</h2>
                    <hr className="w-4 border-t-1.5 border-black my-3"/>
                    <div className="space-y-6 mt-6">
                        <div>
                            <label className="text-xs">お名前 ※必須</label>
                            <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('name')}/>
                            <p className="text-xs text-red-600 mt-1">{errors.name?.message}</p>
                        </div>
                        <div>
                            <label className="text-xs">フリガナ ※必須</label>
                            <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('kana')}/>
                            <p className="text-xs text-red-600 mt-1">{errors.kana?.message}</p>
                        </div>
                        <div>
                            <label className="text-xs">御社名</label>
                            <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                        </div>
                        <div>
                            <label className="text-xs">御社名 フリガナ</label>
                            <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                        </div>
                        <div>
                            <label className="text-xs">電話番号</label>
                            <input type="text" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                        </div>
                        <div>
                            <label className="text-xs">メールアドレス ※必須</label>
                            <input type="email" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('email')}/>
                            <p className="text-xs text-red-600 mt-1">{errors.email?.message}</p>
                        </div>
                        <div>
                            <label className="text-xs">気になったプロジェクト</label>
                            <input type="email" className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" />
                        </div>
                        <div>
                            <label className="text-xs">お問い合わせの内容 ※必須</label>
                            <textarea rows={5} className="bg-white block w-full border-1.5 border-black px-3 py-2 text-sm mt-2" {...register('message')}></textarea>
                            <p className="text-xs text-red-600 mt-1">{errors.message?.message}</p>
                        </div>

                        <div>
                            <label className="text-xs">
                                <input type="checkbox" {...register('agreement')} className="mr-1"/>
                                送信内容確認済み
                            </label>
                            <p className="text-xs mt-2">※上記送信内容を確認後チェックを入れてください。</p>
                        </div>
                        <div className="flex justify-center">
                            <ReCAPTCHA
                                sitekey="6Lfn1NIZAAAAALJNpsIB0w9hFOSNL30s1Dx6rVmL"
                                onChange={onChallenge}
                            />
                        </div>
                        <button onClick={()=>submit()} disabled={!canSubmit()} className="block w-full bg-black text-white text-center text-xs py-3 transition-colors hover:bg-gray-800 disabled:bg-gray-400">送信</button>
                        <button onClick={()=>submit()} className="block w-full bg-black text-white text-center text-xs py-3 transition-colors hover:bg-gray-800 disabled:bg-gray-400">送信</button>

                    </div>

                </div>

            </div>
            <NavFooter />
        </div>

    )
}