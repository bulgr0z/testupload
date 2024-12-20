"use server";

export async function uploadFileAction(formData: FormData) {
  const file = formData.get("file");
  if (!file || typeof file === "string") {
    throw new Error("-- pas de fichier");
  }

  formData.append("file", file, file.name);

  const response = await fetch("http://host.docker.internal:8080/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("-- echec api");
  }

  const result = await response.text();

  console.info("-- result : ", result);
}
