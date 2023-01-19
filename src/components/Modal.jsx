import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileInput, Modal, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { ref } from "firebase/storage";
import React from "react";
import { useState } from "react";
import { storage } from "../firebase";
import useMenus from "../hooks/useMenus";
import AppButton from "./Button";

function AppModal({ isModalOpen, setIsModalOpen, title, currentMenu }) {
  const { item, menu } = currentMenu;
  const { editMenuItem } = useMenus();
  const [loading, setLoading] = useState(false);
  const httpRef = ref(storage, item.file);
  const form = useForm({
    initialValues: {
      name: item.name,
      file: null,
    },

    validate: {
      name: isNotEmpty(),
    },
  });

  const handleSubmit = async ({ name, file }) => {
    setLoading(true);
    await editMenuItem({ name, file }, menu, item);
    setLoading(false);
    setIsModalOpen(false);
  };

  return (
    <Modal
      className="modal"
      opened={isModalOpen}
      title={title}
      onClose={() => setIsModalOpen(false)}>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          variant="unstyled"
          size="xs"
          placeholder="Menu Name"
          withAsterisk
          {...form.getInputProps("name")}
        />
        <FileInput
          variant="unstyled"
          size="xs"
          placeholder={httpRef.name}
          accept="application/pdf"
          icon={<FontAwesomeIcon icon={faUpload} />}
          withAsterisk
          {...form.getInputProps("file")}
        />
        <AppButton type="submit" name={"Save"} loading={loading} />
      </form>
    </Modal>
  );
}

export default AppModal;
