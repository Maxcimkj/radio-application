package com.radio.service.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.Optional;

public interface StyleRepository extends JpaRepository<Style, Long> {
    Optional<Style> findByName(String name);

    @Query("select s from Style s where s.name like %:name%")
    Collection<Style> findByNameContaining(@Param("name") String name);
}
