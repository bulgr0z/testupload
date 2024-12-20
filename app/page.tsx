import { uploadFileAction } from "./actions/server";

export default function Home() {
  return (
    <div>
      <form action={uploadFileAction}>
        <input type="file" name="file" />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
