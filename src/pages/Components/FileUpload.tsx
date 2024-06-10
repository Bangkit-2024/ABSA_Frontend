import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Dropzone from "react-dropzone"
import { UploadCloud } from "lucide-react";
import SimpleTable from "Common/Components/Table/Table";
import { processFile } from "helpers/processdata/process";
import withReactContent from 'sweetalert2-react-content'
import { uploadReviewThunk } from "slices/thunk";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

interface defaultParsed{
    header:string[],
    content:string[][]
}

const FileUpload = () => {
    const defaultParsed : defaultParsed = {header:[],content:[]}
    const [selectedFiles, setSelectedFiles] = React.useState<any>([])
    const [parsedFile, setParsedFile] = React.useState<any>(defaultParsed)
    const dispatch = useDispatch<any>();

    const handleAcceptedFiles = async (files: any) => {
        files.map((file: any) =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        )
        setSelectedFiles(files)
    }

    const handleVerifyUpload = async ()=>{
        withReactContent(Swal).fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`,
          }).then((result) => {
             if(result.isConfirmed){
                dispatch(uploadReviewThunk(selectedFiles[0]))
             }
          })
    }

    React.useEffect(() => {
        if(selectedFiles.length >0 ){
            processFile(selectedFiles[0]).then((data)=>{
                setParsedFile(data)
            }).catch(error=>console.log(error))
        }else{
            setParsedFile(defaultParsed)
        }
    }, [selectedFiles])
    

    /**
     * Formats the size
     */
    const formatBytes = (bytes: any, decimals = 2) => {
        if (bytes === 0) return "0 Bytes"
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
    }

    return (
        <React.Fragment>
            <div className="container-fluid group-data-[content=boxed]:max-w-boxed mx-auto">
                <BreadCrumb title="File Upload" pageTitle="Data" />

                <div className="card">
                    <div className="card-body">
                        <h6 className="mb-4 text-15">Dropzone</h6>
                        {selectedFiles.length  <=0 ? 
                                                <div className="flex items-center justify-center border rounded-md cursor-pointer bg-slate-100 dropzone border-slate-200 dark:bg-zink-600 dark:border-zink-500 dz-clickable">

                                                <Dropzone
                                                    onDrop={(acceptedFiles: any) => {
                                                        handleAcceptedFiles(acceptedFiles)
                                                    }}
                                                    maxFiles={1}
                                                    accept={{
                                                        'text/csv': ['.csv'],
                                                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                                                      }}
                                                >
                                                    {({ getRootProps, getInputProps }: any) => (
                                                        <div
                                                            className="w-full py-5 text-lg text-center dz-message needsclick"
                                                            {...getRootProps()}
                                                        >
                                                            <input {...getInputProps()} />
                                                            <div className="mb-3">
                                                                <UploadCloud className="block size-12 mx-auto text-slate-500 fill-slate-200 dark:text-zink-200 dark:fill-zink-500"></UploadCloud>
                                                            </div>
                    
                                                            <h5 className="mb-0 font-normal text-slate-500 text-15">Drag and drop your files or <a href="#!">browse</a> your files</h5>
                                                        </div>
                                                    )}
                                                </Dropzone>
                                            </div>

                                            :  <SimpleTable
                                            headers={parsedFile.header}
                                            contents={parsedFile.content}
                                          />
                        }

                        <ul className="mb-0" id="dropzone-preview">
                            {
                                (selectedFiles || [])?.map((f: any, i: any) => {
                                    return (
                                        <li className="mt-2" id="dropzone-preview-list" key={i + "-file"}>
                                            <div className="border rounded border-slate-200 dark:border-zink-500">
                                                <div className="flex p-2">
                                                    <div className="shrink-0 me-3">
                                                        <div className="p-2 rounded-md size-14 bg-slate-100 dark:bg-zink-600">
                                                            <img data-dz-thumbnail className="block w-full h-full rounded-md" src={f.preview} alt={f.name} />
                                                        </div>
                                                    </div>
                                                    <div className="grow">
                                                        <div className="pt-1">
                                                            <h5 className="mb-1 text-15" data-dz-name>{f.name}</h5>
                                                            <p className="mb-0 text-slate-500 dark:text-zink-200" data-dz-size>{f.formattedSize}</p>
                                                        </div>
                                                    </div>
                                                    <div className="shrink-0 ms-3">
                                                        <button data-dz-remove
                                                            className="px-2 py-1.5 text-xs text-white bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
                                                            onClick={() => {
                                                                const newFiles = [...selectedFiles];
                                                                newFiles.splice(i, 1);
                                                                setSelectedFiles(newFiles);
                                                            }}
                                                        >Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {selectedFiles.length  >0 ? (<button className="w-full mt-3 bg-blue-400 text-white px-3 py-2 rounded-md" onClick={handleVerifyUpload}>Submit File</button>):<></>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default FileUpload;